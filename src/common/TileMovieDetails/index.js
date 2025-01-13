import { Poster, Wrapper, TileTitle, TileSubTitle, TileContent } from './styled.js';
import posterMulan from '../../images/posterMulan.png';
import { ProductionInfo } from './ProductionInfo/index.js';
import { Ratings } from './Ratings/index.js';
import { MovieDescription } from './Description/index.js';
import { Genre } from './Genre/index.js';

export const MovieDetailsTile = () => {

  return (
    <Wrapper>
      <Poster src={posterMulan} alt="poster of mulan" />
      <TileContent>
        <TileTitle>Mulan</TileTitle>
        <TileSubTitle>2020</TileSubTitle>
        <ProductionInfo />
        <Genre genres={[{ tag: 'Action' }, { tag: 'Adventure' }, { tag: 'Drama' }]} />
        <Ratings ratings={{ rate: '7,8', maxRate: '/10', votes: '35' }} />
      </TileContent>
      <MovieDescription />
    </Wrapper>
  )
};
