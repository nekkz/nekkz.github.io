function createChart() {
	/* internal variables, with defaults */
	var width = 720, height = 80

	var data = [{x: 30, y: 50},
	            {x: 50, y: 80},
	            {x: 90, y: 100}];
	
	function chart() {}
	
	/**
	 * Build the graph into the specified node
	 */
	chart.render = function(node) {
		node.attr("width", width);
		node.attr("height", height);
		
		var n = node.selectAll("circle.node")
					.data(data)
					.enter().append("g")
					.attr("class", "node");
		
		n.append("svg:circle")
		 .attr("cx", function(d) { return d.x; })
		 .attr("cy", function(d) { return d.y; })
		 .attr("r", "10px")
		 .attr("fill", "black");
	}

	/* getter-setter accessor methods: */
	chart.width = function(value) {
		if (!arguments.length)
			return width
		width = value
		return chart
	}

	chart.height = function(value) {
		if (!arguments.length)
			return height
		height = value
		return chart
	}

	return chart
}