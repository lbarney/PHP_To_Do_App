angular.module('phpToDoApp').service('mainServ', function($http){

	this.getTasksServ = function(){
		return $http({
			method: "GET",
			url: "scripts/get_tasks.php"
		}).then(function(response){
			return response.data;
		})
	};

	this.addTaskServ = function(task){
		return $http({
			method: "POST",
			url: "scripts/add_task.php",
			data: {
				newTask: task
			}
		}).then(function(response){
			return response.data;
		})
	};
	this.updateTaskServ = function(id, task){
		return $http ({
			method: "PUT",
			url: "scripts/update_task.php",
			data: {
				"changedTask": task,
				"id": id
			}
		}).then (function(response){
		})
	};
	this.deleteTaskServ = function(id){
		return $http ({
		method: "DELETE",
		url: "scripts/delete_task.php",
		data: {
			"id": id
		}
		}).then(function(response){
		})
	};
});