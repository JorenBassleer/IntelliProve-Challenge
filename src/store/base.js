import { ref } from 'vue';
import { defineStore } from 'pinia';
import useNotify from '@composables/notify';
import useAxios from '../composables/axios';

export const useBaseStore = defineStore('base', () => {
  const { notify } = useNotify();
  const { instance } = useAxios();

  const externalUserIds = ref(['emma.watson@intelliprove.com', 'john.snow@intelliprove.com']);

  const currentAuthenticatedUser = ref({
    email: '',
    token: '',
  });
  const profiles = ['physical', 'mental', 'energy-sleep'];
  const currentProfiles = ref([]);

  const getUserProfiles = async () => {
    try {
      const requests = profiles.map((profile) => instance.get(`/v2/userprofiles/${profile}`, {
        headers: {
          Authorization: `Token ${currentAuthenticatedUser.value.token}`,
        },
      }).then((response) => response.data));

      currentProfiles.value = await Promise.all(requests);
    } catch (e) {
      notify({
        title: 'Error',
        text: e.message,
        type: 'error',
      });
    }
  };

  const getUserWidget = async (payload) => {
    try {
      const result = await instance.post(
        '/v2/widgets/graph',
        {
          ...payload,
        },
        {
          headers: {
            Authorization: `Token ${currentAuthenticatedUser.value.token}`,
          },
        },
      );
      return result.data;
    } catch (e) {
      notify({
        title: 'Error',
        text: e.message,
        type: 'error',
      });
      return e;
    }
  };

  const authenticate = async (email) => {
    try {
      const response = await instance.post('/v2/users/authenticate', {
        external_user_id: email,
      }, {
        headers: {
          'x-api-key': import.meta.env.VITE_API_KEY,
        },
      });
      currentAuthenticatedUser.value = {
        email,
        token: response.data.token,
      };
      notify({
        title: 'Authenticated',
        text: 'User is now authenticated',
        type: 'success',
      });
      return response;
    } catch (e) {
      notify({
        title: 'Error',
        text: e.message,
        type: 'error',
      });
      return e;
    }
  };

  return {
    externalUserIds,
    currentAuthenticatedUser,
    currentProfiles,
    getUserProfiles,
    getUserWidget,
    authenticate,
  };
});
