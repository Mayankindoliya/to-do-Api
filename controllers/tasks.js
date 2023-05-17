const Tasks = require('../models/tasks');

class tasksController {
  static async createTasks(document, user){
    if(!user) {
      throw new Error('user not found')
    }
    document.user = user;
  const tasks = await Tasks.create(document)
  return tasks
  }
}


module.exports = tasksController;