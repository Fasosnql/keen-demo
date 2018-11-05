import React, { Component } from 'react';
import KeenTrack from 'components/KeenTrack';
import Page1Layout from 'components/Layouts/Page1Layout';

const Page1 = () => (<Page1Layout />);

export default KeenTrack({
  item: 'page1'
})(Page1);
