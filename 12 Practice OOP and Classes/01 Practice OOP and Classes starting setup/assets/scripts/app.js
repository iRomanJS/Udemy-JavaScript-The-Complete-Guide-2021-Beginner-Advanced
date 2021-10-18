class DOMHelper {
  static clearEventListener(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, setDestenationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(setDestenationSelector);
    destinationElement.append(element);
  }  
}

class Tooltip {
  constructor(closeNotifierFunction){
    this.closeNotifier = closeNotifierFunction;
  }


  closeToolTip () {
    this.detach();
    this.closeNotifier();
  }

  detach() {
    this.element.remove();
  }

  attach () {
    const createdElement = document.createElement('div');
    createdElement.className = 'card';
    createdElement.textContent = 'DUMMY!';
    createdElement.addEventListener('click', this.closeToolTip.bind(this));
    this.element = createdElement;
    document.body.append(createdElement);
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, switchHandlerFunction, type) {
    this.id = id;
    this.switchHandler = switchHandlerFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const toolTipHandler = new Tooltip(() => {
      this.hasActiveTooltip = false;
    });
    toolTipHandler.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector('button:first-of-type');
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler);

  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector("button:last-of-type");
    switchBtn = DOMHelper.clearEventListener(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener("click", this.switchHandler.bind(null, this.id));
  }

  update(updateProjectListFunction, type) {
    this.switchHandler = updateProjectListFunction;
    this.connectSwitchButton(type);
  }

}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${this.type}-projects li`);

    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
  }

  setSwitchHandlerFunction(switchProjectHandlerFunction) {
    this.switchHandlerFunction = switchProjectHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    this.switchHandlerFunction(this.projects.find((p) => p.id === projectId));
    this.projects = this.projects.filter((p) => p.id !== projectId);
  }
}

class App {
  static init() {
    const activeProjectList = new ProjectList("active");
    const finishedProjectList = new ProjectList("finished");
    activeProjectList.setSwitchHandlerFunction(
      finishedProjectList.addProject.bind(finishedProjectList)
    );
    finishedProjectList.setSwitchHandlerFunction(
      activeProjectList.addProject.bind(activeProjectList)
    );
  }
}

App.init();
