import React from 'react';
import PropTypes from 'prop-types';

import PokemonType from '../pokemonType';

const PokemonRow = ({ pokemon, onClick }) => (
  <>
    <tr key={pokemon.id}>
      <td>{pokemon.name.english}</td>
      <td>{pokemon.type.join(', ')}</td>
      <td>
        <button
          variant='contained'
          color='primary'
          onClick={() => onClick(pokemon)}
        >
          More Info
        </button>
      </td>
    </tr>
  </>
);

PokemonRow.propTypes = {
  pokemon: PropTypes.arrayOf(PokemonType),
};

export default PokemonRow;
