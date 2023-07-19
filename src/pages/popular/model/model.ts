import {createEffect, createEvent, createStore, sample} from 'effector';
import {getPopularMovies} from '../../../shared';
import {IMovieResponse} from '../../../shared';

//effects
const fetchPopularMovieFx = createEffect({
  handler: getPopularMovies
});

//events
export const opened = createEvent();

//stores
export const $popularMovie = createStore<null | IMovieResponse>(null);

$popularMovie.on(fetchPopularMovieFx.doneData, (_, {data}) => data);

sample({
  clock: opened,
  target: fetchPopularMovieFx
});