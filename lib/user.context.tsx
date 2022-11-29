import {
  createContext,
  Dispatch,
  ReactElement,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth, onAuthStateChanged } from "@lib/firebase";
import { User } from "firebase/auth";

export type UserContextType = User | null;

interface IUserContext {
  user: UserContextType;
  setUser: Dispatch<SetStateAction<UserContextType>>;
}

interface IProps {
  children: ReactElement | ReactElement[];
}

const UserContext = createContext<IUserContext>({} as IUserContext);

export const useUserContext = () => {
  return useContext(UserContext);
};

export function UserContextProvider({ children }: IProps) {
  const [user, setUser] = useState<UserContextType>(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
        if (user) {
            setUser(() => user);
        } else {
            setUser(null);
        }
    });

  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
}
