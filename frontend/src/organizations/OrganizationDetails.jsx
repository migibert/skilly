import React from 'react';

export default function OrganizationDetails({ match }) {
  return (
    <div>
      <h1>Organization {match.params.id} Details Menu</h1>
    </div>
  );
}