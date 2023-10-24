'use client';

import React from 'react'
import { VerticalTimeline, VerticalTimelineElement, }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from '../lib/data';

export default function Experience() {
  return (
    <section>
        <h2 className="text-3xl font-medium mb-8">My Experience</h2>
        <VerticalTimeline
            contentStyle={{}}>
            {
                experiencesData.map((item, index) => (
                    <React.Fragment key={index}>
                        <VerticalTimelineElement>
                            <h3>{item.title}</h3>
                            <p>{item.location}</p>
                            <p>{item.description}</p>
                        </VerticalTimelineElement>
                    </React.Fragment>
                ))
            }
        </VerticalTimeline>

    </section>
  )
}
