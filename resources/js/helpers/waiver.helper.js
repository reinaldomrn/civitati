import { config } from 'environments/config/config';
import { signWaiverInWaiverForever } from 'services/booking.service';

export const signWaiverHelpers = () => {
  const inputBody = {
    target_url: `http://hokalidev-env.eba-5ghgi3ye.us-west-1.elasticbeanstalk.com//api/auth/signin/api/booking/waiver/webhook`,
    template_id: '6nQmzqJDnd1621797433',
    event: 'new_waiver_signed',
  };

  signWaiverInWaiverForever(inputBody).then(
    (response) => {
      console.log(response);
    },
    (err) => console.log(err),
  );
};
