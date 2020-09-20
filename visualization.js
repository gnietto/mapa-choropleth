	let svg =
		d3.select('#mapa')
		.append('svg')
		.attr('viewBox','0 0 1000 800')
		.attr('width', 1000)
		.attr('height', 800)
		

	
	let datos =	d3.json('./counties.json')
			.then(
				(data, error) => {
					if (error) return console.error(error);
					console.log(data);

					svg
					.selectAll('path')
					.data(topojson.feature(data, data.objects.states).features)
					.enter()
					.append('path')
					.attr('d', d3.geoPath() )
					.attr('transform', `scale(0.82, 0.62)`)				
					.attr('class', 'state')
				});