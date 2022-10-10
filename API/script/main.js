import Scorm from "../API";

function startCourse() {
  if (Scorm.init()) {
    Scorm.setData("cmi.core.lesson_status", "incomplete");
    const gettingClassState = {
      startValue: Scorm.getData("cmi.core.lesson_status"),
    };
    if (gettingClassState.startValue === "not attempted") {
    }
  }
}
