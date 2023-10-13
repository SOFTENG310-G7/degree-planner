import { DiscussionEmbed } from 'disqus-react';
import React from 'react';

interface Props {
  openedData: {
    course_code: string;
  };
}

function DisqusComments({ openedData }: Props) {
  console.log(openedData);
  const disqusConfig = {
    url: `http://localhost:3000/pages/courses/${openedData.course_code}`,
    identifier: `course_${openedData.course_code}`,
    title: openedData.course_code,
  };

  return <DiscussionEmbed shortname="degree-planner" config={disqusConfig} />;
}

export default DisqusComments;
