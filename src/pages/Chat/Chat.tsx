// import { useCollectionData } from 'react-firebase-hooks/firestore';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Firebase } from '../../contexts/Firebase';
import * as S from './Chat.styled';
import { ListMessages } from '../../components/ListMessages';
import { ListUsers } from '../../components/ListUsers';

const Chat = () => {
  const { firestore, auth } = useContext(Firebase);
  const [user] = useAuthState(auth);
  const [messages, setMessages] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = firestore
      .collection('messages')
      .orderBy('created')
      .onSnapshot((snapshot: any) => {
        const updatedMessages = snapshot.docs.map((doc: any) => doc.data());
        setMessages(updatedMessages);
        setIsLoading(false);
      });

    return () => {
      unsubscribe();
    };
  }, [firestore]);

  const myUid = user?.uid ?? '';

  console.log(myUid, messages);

  if (isLoading) return <p>Loading............</p>;
  else
    return (
      <S.Wrapper>
        <ListUsers />
        {messages.length ? (
          <ListMessages myUid={myUid} messages={messages} />
        ) : (
          <p>Cообщений ещё нет</p>
        )}

        {/* ListMEssages */}
        {/* BottomInput */}
      </S.Wrapper>
    );
};

export { Chat };