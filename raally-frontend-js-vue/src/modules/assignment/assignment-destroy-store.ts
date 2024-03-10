import { AssignmentService } from '@/modules/assignment/assignment-service';
import Errors from '@/shared/error/errors';
import { routerAsync } from '@/app-module';
import Message from '@/shared/message/message';
import { i18n } from '@/i18n';

export default {
  namespaced: true,

  state: {
    loading: false,
  },

  getters: {
    loading: (state) => Boolean(state.loading),
  },

  mutations: {
    DESTROY_ALL_STARTED(state) {
      state.loading = true;
    },

    DESTROY_ALL_SUCCESS(state) {
      state.loading = false;
    },

    DESTROY_ALL_ERROR(state) {
      state.loading = false;
    },

    DESTROY_STARTED(state) {
      state.loading = true;
    },

    DESTROY_SUCCESS(state) {
      state.loading = false;
    },

    DESTROY_ERROR(state) {
      state.loading = false;
    },
  },

  actions: {
    async doDestroy({ commit, dispatch, rootGetters }, id) {
      try {
        commit('DESTROY_STARTED');

        await AssignmentService.destroyAll([id]);

        commit('DESTROY_SUCCESS');

        Message.success(
          i18n('entities.assignment.destroy.success'),
        );

        routerAsync().push('/assignment');

        dispatch(
          `assignment/list/doFetch`,
          rootGetters[`assignment/list/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('DESTROY_ERROR');
      }
    },

    async doDestroyAll(
      { commit, dispatch, rootGetters },
      ids,
    ) {
      try {
        commit('DESTROY_ALL_STARTED');

        await AssignmentService.destroyAll(ids);

        commit('DESTROY_ALL_SUCCESS');

        dispatch(`assignment/list/doUnselectAll`, null, {
          root: true,
        });

        Message.success(
          i18n('entities.assignment.destroyAll.success'),
        );

        routerAsync().push('/assignment');

        dispatch(
          `assignment/list/doFetch`,
          rootGetters[`assignment/list/filter`],
          {
            root: true,
          },
        );
      } catch (error) {
        Errors.handle(error);
        commit('DESTROY_ALL_ERROR');
      }
    },
  },
};
