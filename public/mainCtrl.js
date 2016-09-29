angular.module('phpToDoApp').controller('mainCtrl', function($scope, mainServ){
	
	$scope.focused = false;


	$scope.getTasks = function(){
		mainServ.getTasksServ()
		.then(function(response){
			$scope.items = response;
		})
	}

	$scope.addTask = function(task){
		mainServ.addTaskServ(task)
		.then(function(response){
			$scope.newTask = "";
			$scope.getTasks();
			})
	}

	$scope.updateTask = function(id, data){
		mainServ.updateTaskServ(id, data)
		.then(function(response){
			console.log(id,data);
			$scope.getTasks();
			$scope.focused = false;
		})
	}

	$scope.deleteTask = function(id){
		mainServ.deleteTaskServ(id)
		.then(function(response){
			$scope.getTasks();
		})
	}
	$scope.updateInput = function(){
		$scope.focused = true;
	}
}); 