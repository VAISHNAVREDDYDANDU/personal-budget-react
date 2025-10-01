import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BudgetD3Donut({ items }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Clear previous
    element.innerHTML = '';

    const width = 500;
    const height = 500;
    const margin = 80;
    const radius = Math.min(width, height) / 2 - margin;

    const svg = d3
      .select(element)
      .append('svg')
      .attr('width', width)
      .attr('height', height)
      .append('g')
      .attr('transform', `translate(${width / 2},${height / 2})`);

    const data = items.reduce((acc, item) => {
      acc[item.title] = item.budget;
      return acc;
    }, {});

    const color = d3
      .scaleOrdinal()
      .domain(Object.keys(data))
      .range(items.map((i) => i.color || '#4d5791'));

    const pie = d3
      .pie()
      .sort(null)
      .value((d) => d[1]);

    const dataReady = pie(Object.entries(data));

    const arc = d3
      .arc()
      .innerRadius(radius * 0.5)
      .outerRadius(radius * 0.8);

    const outerArc = d3
      .arc()
      .innerRadius(radius * 0.9)
      .outerRadius(radius * 0.9);

    // Draw the slices
    svg
      .selectAll('path')
      .data(dataReady)
      .join('path')
      .attr('d', arc)
      .attr('fill', (d) => color(d.data[0]))
      .attr('stroke', 'white')
      .style('stroke-width', '2px');

    // Add polylines
    svg
      .selectAll('polyline')
      .data(dataReady)
      .join('polyline')
      .attr('stroke', 'black')
      .style('fill', 'none')
      .attr('stroke-width', 1)
      .attr('points', function(d) {
        const posA = arc.centroid(d);
        const posB = outerArc.centroid(d);
        const posC = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        posC[0] = radius * 0.95 * (midangle < Math.PI ? 1 : -1);
        return [posA, posB, posC];
      });

    // Add labels
    svg
      .selectAll('text')
      .data(dataReady)
      .join('text')
      .text((d) => d.data[0])
      .attr('transform', function(d) {
        const pos = outerArc.centroid(d);
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        pos[0] = radius * 0.99 * (midangle < Math.PI ? 1 : -1);
        return `translate(${pos})`;
      })
      .style('text-anchor', function(d) {
        const midangle = d.startAngle + (d.endAngle - d.startAngle) / 2;
        return (midangle < Math.PI ? 'start' : 'end');
      })
      .style('font-size', 14);
  }, [items]);

  return <div ref={ref} style={{ width: '100%', height: 500, maxWidth: '600px', margin: '0 auto', display: 'flex', justifyContent: 'center', alignItems: 'center' }} />;
}

export default BudgetD3Donut;


