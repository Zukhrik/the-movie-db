import {createEffect, createEvent, createStore, sample} from 'effector';
import {
  getCastDetail,
  getCastImages,
  getCastTargetImages,
  ICastDetail,
  ICastImages,
  ITargetImages
} from '../../../shared';

//effects
export const fetchCastDetailFx = createEffect({
  handler: getCastDetail
});

export const fetchCastImagesFx = createEffect({
  handler: getCastImages
});

export const fetchCastTargetImagesFx = createEffect({
  handler: getCastTargetImages
});

//events
export const opened = createEvent<number>();
export const resetPage = createEvent();

// stores
export const $castDetail = createStore<null | ICastDetail>(null);
export const $castImages = createStore<null | ICastImages>(null);
export const $castTargets = createStore<null | ITargetImages>(null);

$castDetail.on(fetchCastDetailFx.doneData, (_, {data}) => data).reset(resetPage);
$castImages.on(fetchCastImagesFx.doneData, (_, {data}) => data);
$castTargets.on(fetchCastTargetImagesFx.doneData, (_, {data}) => data);

sample({
  source: opened,
  target: [fetchCastDetailFx, fetchCastImagesFx, fetchCastTargetImagesFx]
});