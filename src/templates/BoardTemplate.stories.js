import React from 'react';

import BoardTemplate from './BoardTemplate';
import { data } from "../pages/data.js";

export default {
  title: 'Templates/BoardTemplate',
  component: BoardTemplate,
};

const Template = (args) => <BoardTemplate {...args}></BoardTemplate>;

export const Kanban = Template.bind({});
Kanban.args = {
  data: data
};
