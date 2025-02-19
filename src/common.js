import axios from 'axios';
import {SchedulerResourceApi} from '../src/openapi/api/scheduler-resource-api.ts'
import {Configuration} from '../src/openapi/configuration.ts'
const getToken = async () => {
    try {
      const response = await axios.post(
        "https://sso.logicdrop.cloud/realms/refloor/protocol/openid-connect/token",
        {
          client_id: "refloor-scheduler",
          client_secret: "WVRjcFgLqOVQJmAYeQNellqfijnHlQZn",
          grant_type: "client_credentials",
        },
        {
          headers: {
            "content-type": "application/x-www-form-urlencoded",
          },
        }
      );
      if (response.status === 200) {
        return response.data.access_token;
      }

      return "";
    } catch (error) {
      console.error("Error retrieving token.");
      return "";      
    }
  };

const startService = (token, path) => {
    return new SchedulerResourceApi(
        new Configuration({
        accessToken: token,
        basePath: path,
        })
    );
};

export {getToken, startService}