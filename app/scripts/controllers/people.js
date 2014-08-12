'use strict';

/**
 * @ngdoc function
 * @name dmafApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dmafApp
 */

var app = angular.module('dmafApp');
app.controller('PeopleCtrl', function($scope,$routeParams) {
	if($routeParams.person === 'marjo'){
		$scope.name = 'Marjo Niemela';
		$scope.img = 'labs/digfab/digfab0.jpg';
		$scope.info = "<p>Marjo Niemelä is the manager of the Design Modelling and Fabrication Lab (DMaF) in the Faculty of Architecture, Design and Planning at the University of Sydney. The Finnish-born, architecturally trained furniture and fabrication expert has guided the development of the Faculty's digital fabrication facilities. The breadth and extent of facilities and expertise in the faculty today is a testament to her commitment to the importance and integration of fabrication across the numerous programs offered by the Faculty. </p><p>Downstairs in the DMaF laboratory, we're talking about the journey that has brought Marjo to the faculty and how she came to lead this new venture into digital fabrication. Surrounded by the raw sounds of drills, saws and sanders, Marjo's office is an oasis of calm amongst the hectic production that goes on around the clock in the DMaF. Our conversation is punctuated by students firing up new equipment and the faint buzz of a laser cutter making the finishing touches to a model. </p><p>Marjo was born in Lappeenranta, south-eastern Finland. She later moved back and forth between Finland and Australia, starting in 1983. Marjo completed studies in architecture in Canberra and later in Oulu, Finland. Afterwards, she travelled to Japan where she completed a variety of design-based roles. She came back to Australia and completed a fine woodworking course at Sturt School for Wood in Mittagong, NSW. She later moved to Sydney and set up her own company in furniture design and fabrication. It was during this time that she began working with the Faculty to coordinate the fledgling digital fabrication program that was in development. </p><p>From this diverse and multi-cultural experience, Marjo brings a fresh approach to the importance of fabrication. She recognised early on that one of the distinguishing factors of a degree from the Faculty is that we have access to our own equipment. Under her guidance, the DMaF has demonstrated the relevance of fabrication to an ever-increasing array of subjects. </p><p>'When we started, digital fabrication was just for the Master of Digital Architecture students. We produced an exhibition, Metamorphoses of which I am immensely proud. The work we created for that exhibition demonstrated what could be done with the first set of equipment the faculty bought. Of course, we've since improved our tools. For the exhibition, we completed about 340 hours of routing time on just one piece. The new equipment can do all of that work in about 30 hours. It's that kind of efficiency that makes digital fabrication really attractive to students and industry,' Marjo said. </p><p>'What I'm really looking forward to is what the Architectural Communications III students will achieve next year as Master students. There has been a general upskilling in the use of the equipment and students are creating more and more ambitious designs. It's great to see that undergraduates are now at the level of the masters students when we first started the program.'</p><p>'In other design schools, you send your [digital] files off and then you pick up the pieces when they have been cut or the model has been printed. And those schools charge a lot for that service. We train our students to use the machines themselves. The way we do it is what is normal and expected in design schools across Europe. The other universities are now coming to us to learn how we achieved that level of student expertise,' Marjo said. </p><p>'I pushed for everything to be student run,' Marjo said. 'Supervised, of course, but to ensure that students understand the whole process. That's respected in industry because our graduates know that they are sending correct and usable files to their company's fabrication partners.' </p><p>Marjo has recently committed her energy to expanding the scope of the DMaF beyond current students. The Faculty will be launching a pilot program for use of DMaF equipment amongst alumni later this year. Marjo is excited for the opportunity this presents both for alumni and also for current staff. </p><p>'There will be so many benefits. Alumni will stay in touch with the faculty and will be able to pursue their own projects in first-class facilities. And the faculty will be able to retain many of the talented staff that work for us in the workshops. It's been difficult to maintain that talent when the university closes over the non-teaching period. It's these sorts of community programs that will allow the Faculty to maintain and attract such high calibre staff that provide the guidance and expertise for our fabrication facilities,' Marjo said. </p><p>'Humans are the ones that operate machines. They always have done so. And being able to retain the humans that best run our machines, well, that's something we're working hard at achieving'. </p>"
	}
		
	
	
    
});
