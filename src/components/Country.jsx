import React, { useState } from 'react';

function Country() {
    var [int, setInt] = useState(0);
    var [name, setName] = useState('United States')

    function handleClick() {
    setInt(int + 1)
  }

    return <div>{name}: {int}<button onClick={handleClick}> + give medal </button></div>;
}

export default Country;