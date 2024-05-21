import type {
  CompanyFragment,
  Session as SessionType,
  StoreFragment,
  UserInfo,
  UserRoleCompany,
  UserRoleStore,
} from 'src/gql/graphql';
import { GetUserCompanyDocument, GetUserStoreDocument } from 'src/gql/graphql';
import { GraphQLClientSSR } from 'src/gql/graphql-provider-wrapper';
import { UserSession } from 'src/types/User';

interface GetUserSessionFromServerSideProps {
  session: {
    userSession: SessionType;
    accessToken: string;
  };
}

export const getUserSessionFromServerSide = async ({
  session,
}: GetUserSessionFromServerSideProps): Promise<UserSession> => {
  const userSession = session.userSession;

  let company: CompanyFragment | undefined;
  let store: StoreFragment | undefined;
  let roleOnCompany: UserRoleCompany | undefined;
  let roleOnStore: UserRoleStore | undefined | null;

  if (userSession?.companyId) {
    const res = await GraphQLClientSSR({
      accessToken: session.accessToken,
    }).query({
      query: GetUserCompanyDocument,
      variables: {
        userId: userSession.user.id,
        companyId: userSession.companyId || '',
      },
    });

    company = res.data.userCompany.company;
    roleOnCompany = res.data.userCompany.userRoleCompany;

    if (userSession?.storeId) {
      const res = await GraphQLClientSSR({
        accessToken: session.accessToken,
      }).query({
        query: GetUserStoreDocument,
        variables: {
          userId: userSession.user.id,
          storeId: userSession.storeId || '',
        },
      });

      store = res.data.userStore.store;
      roleOnStore = res.data.userStore.userRoleStore;
    }
  }

  return {
    sessionId: userSession.id,
    user: {
      ...userSession.user,
      roleOnCompany: roleOnCompany || null,
      roleOnStore: roleOnStore || null,
    },
    company: company || null,
    store: store || null,
  } as UserSession;
};
