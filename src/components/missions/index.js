import React from 'react';
import PropTypes from 'prop-types';
import uniquid from 'uniquid';

const Missions = ({ ...datas }) => {
  const test = datas;

  test.missions.propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    clientId: PropTypes.string.isRequired,
    partnerId: PropTypes.string.isRequired,
    managerId: PropTypes.string.isRequired,
    addenda: PropTypes.array.isRequired,
  };

  return (
    <div>
      {datas.missions.map(data => (
        <ul key={data.id}>
          <li>id: {data.id} </li>
          <li>name: {data.name} </li>
          <li>clientId: {data.clientId} </li>
          <li>partnerId: {data.partnerId}</li>
          <li>managerId: {data.managerId}</li>
          <p>addenda longueur = {data.addenda.length}</p>
          {data.addenda.map(addenda => (
            <ul key={uniquid()}>
              <li>{addenda.workerId}</li>
            </ul>
          ))}
        </ul>
      ))}
    </div>
  );
};

export default Missions;
