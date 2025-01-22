import { useAppDispatch } from '@/lib/store/store';
import { setError, setIsLoading, setUsers } from '@/lib/store/user-store';
import { FEUserService } from '@/lib/user-service';
import to from 'await-to-js';
import { useEffect } from 'react';

/**
 * This hook will ensure the data is being loaded and saved on the redux store from the component that is using it.
 */
export function useUserData() {
  const dispatch = useAppDispatch();

  // this all implementation can be moved to react query. but as I need to use redux I am keeping it here
  // for the time being, I'm not using any caching or avoid API call repetition.
  useEffect(() => {
    (async () => {
      dispatch(setIsLoading(true));
      const [err, users] = await to(FEUserService.getUsers());
      dispatch(setIsLoading(false));
      if (err) {
        dispatch(setError(err.message));
      } else if (users) {
        dispatch(setUsers(users));
      }
    })();
  }, [dispatch]);
}
