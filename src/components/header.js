import React from 'react';
import Flex from './Flex';
import List from './List';
import Bio from './bio';
import { colors } from './styles';

const SubHeader = () => {
  const links = [
    <a href="mailto:theroncross@gmail.com"><h3>theroncross@gmail.com</h3></a>,
    <a href="https://github.com/theroncross"><h3>Github</h3></a>,
    <a href="https://www.linkedin.com/in/theroncross"><h3>LinkedIn</h3></a>,
    <a href="https://twitter.com/theroncross"><h3>Twitter</h3></a>,
  ];
  const headerStyle = {
    flexDirection: 'column',
    alignItems: 'center',
    margin: '40px 0 10px',
    padding: '15px 0',
    backgroundColor: colors.light,
    borderBottom: `1px solid ${colors.accent}`,
  };
  const linkStyle = {
    width: '60%',
    padding: '10px 0',
    justifyContent: 'space-between',
  };

  return (
    <Flex style={headerStyle} >
      <Bio />
      <List items={links} style={linkStyle} />
    </Flex>
  );
};

export default SubHeader;
