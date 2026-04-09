const createStubClient = () => ({
  auth: {
    me: async () => { throw Object.assign(new Error('Not authenticated'), { status: 401 }); },
    logout: () => {},
    redirectToLogin: () => {},
  },
  entities: new Proxy({}, {
    get: () => new Proxy({}, { get: () => async () => [] })
  }),
  functions: new Proxy({}, {
    get: () => async () => ({})
  }),
});

export const base44 = createStubClient();
