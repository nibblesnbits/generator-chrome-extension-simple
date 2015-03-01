(function() {
	var posts = document.querySelectorAll('.posts .post'),
		len = posts.length,
		i = -1;

	if (len < 1) return;

	while (++i < len) {
		addLinks(posts[i].id);
	}

	document.querySelector('.l-content').addEventListener('DOMNodeInserted', function(e) {
		if (/^post\s/.test(e.target.className)) {
			addLinks(e.target.id);
		}
	});

	function addLinks(id) {
		var elem = document.getElementById(id);
		var reblogId = elem.getAttribute("data-reblog-key");
		var postId = elem.getAttribute("data-post-id");
		var type = elem.getAttribute("data-type");

		var controls = createElement('DIV', 'post-controls');

		var reblogLink = createElement('A', 'reblog-button', {
			tite: "Reblog this post",
			href: "http://www.tumblr.com/reblog/" + postId + "/" + reblogId + "?redirect_to=%2Fdashboard",
			target: "_blank"
		});
		reblogLink.addEventListener('onclick', function(e) {
			e.target.className = e.target.className + "done";
		});
		controls.appendChild(reblogLink);

		document.querySelector("#" + id + " .hover").appendChild(controls);
	}

	function createElement(type, className, attrs) {
		var elem = document.createElement('A');
		if (attrs)
			for (prop in attrs) {
				elem.setAttribute(prop, attrs[prop]);
			}
		if (className) elem.className = className;
		return elem;
	}
})();
