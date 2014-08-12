'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('InductionCtrl', function($scope, $routeParams,$sce) {
	console.log($routeParams);


	if($routeParams.induction === 'sicu'){
		/* routeparams = link in array in lab.js  */
		$scope.label = 'SICU Safety Induction and Competency Unit';
		$scope.info = '<p>The Safety Induction and Competency Unit (SICU) provides users of the Design Modeling and Fabrication Lab (students, staff, alumni and visitors) with the knowledge and skills required for safe and effective working practices.</p><p>The course is six hours in length and includes written and skill-based assessment, it’s completion allows users access to all Level 1 Machinery. Users are introduced to safe and appropriate ways of working with materials such as timber, metals and plastics in the Timber Fabrication Lab, Metalastics Lab and Digital Fabrication Lab.</p><p>Through operation of machinery, tools and equipment under supervision partakers become familiar with relevant Work Health and Safety (WH&S) procedures and requirements and assertion of vital basic skills.</p>'
		$scope.bookingInfo = '<p><strong>Book yourself into a Safety Induction and Competency Unit:</srong></p><p>Please review the session times below and select a session in which to take the course and achieve your certificate.</p><p>Access to the DMaF Lab, including the Digital Fabrication Laboratory is subject to completion of the Safety Induction Competency Unit.</p><p> If no SICU classes are currently scheduled, please email Mel to express your interest and you will be contacted when the next course is available.</p>'
		$scope.bookings = ['Sorry the current schedule is not available.']
	}

	if($routeParams.induction === 'laserCutting'){
		/* routeparams = link in array in lab.js  */
		$scope.label = 'Laser Cutting Inductions';
		$scope.info = '<p>All students excepting those enrolled in 1st year Bachelor of Design in Architecture need to complete their laser cutting inductions. (compulsory for 2nd years students)</p><p>Sessions will cover:</p><ul><li>•	Finding/downloading the Rhino laser cutting template</li><li>Preparing your Rhino file for your laser cutting appointment</li><li>•	Booking & paying for your appointment</li><li>Basic cutting and safety brief</li><li>•	Equipment & materials information (woods, plastics, cards, tape, bags etc)</li></ul>'


	}

	if($routeParams.induction === '3dprinting'){
		/* routeparams = link in array in lab.js  */
		$scope.label = '3D printing Inductions';
		$scope.info = '<p>All students wishing to use the 3D printers are encouraged to complete the 3D printing induction, which are run in the first half of each semester.(compulsory for 2nd years students)</p>'

	}

	/* Copy from Here */
	/****** KUKA ******/

	if($routeParams.induction === 'access'){
		/* routeparams = link in array in lab.js  */
		$scope.label = 'Access';
		$scope.info = '<ul><li>Faculty of Architecture Design and Planning student and research projects are DMaF Labs priority, which means that no external jobs will be considered during Semester Weeks 10, 11, 12, 13 & 14;</li><li>DMaF Labs cannot guarantee access to non Faculty of Architecture Design and Planning (FADP) users;</li><li>Use of equipment is an involved process, machines require varying levels of participation from users and it must be noted that DMaF does not offer a drop-and-collect service to users. Users will be expected to work under DMaF staff supervision to fabricate their work in a supervised and safe environment;</li><li>We allow for 10-15 minutes of DMaF Lab staff time with each set up fee, if you require more staff time this will be charged;</li><li>There is no storage space for work in the DMaF Lab; you must leave the work areas as you found them. Left works may be discarded without notification. DMaF Lab takes no responsibility for lost works.</li><li>Prices indicated on this website for machine and equipment use are subsidized for Faculty of Architecture, Design and Planning students and staff only. </li><li>Non FADP prices on application only.</li></ul>'



	}
	/* To here */


	

	
});
