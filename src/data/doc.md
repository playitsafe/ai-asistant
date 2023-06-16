# Get Started

1.  [Docs](/docs)

2.  [Get Started](/docs/get-started)

3.  [Authentication and Authorization Flows](/docs/get-started/authentication-and-authorization-flow)

# Authentication and Authorization Flows

Auth0 uses the [OpenID Connect (OIDC) Protocol](/docs/authenticate/protocols/openid-connect-protocol) and [OAuth 2.0 Authorization Framework](/docs/authenticate/protocols/oauth) to authenticate users and get their authorization to access protected resources. With Auth0, you can easily support different flows in your own applications and APIs without worrying about OIDC/OAuth 2.0 specifications or other technical aspects of [authentication and authorization](/docs/get-started/identity-fundamentals/authentication-and-authorization).

We support scenarios for server-side, mobile, desktop, client-side, machine-to-machine, and device applications.

If you're not sure which flow to use, we can help you decide. To learn more, read [Which OAuth 2.0 Flow Should I Use?](/docs/get-started/authentication-and-authorization-flow/which-oauth-2-0-flow-should-i-use).

During the execution of several flows, your application must also authenticate to the Authorization Server. To learn more about application authentication, read [Application Credentials](/docs/secure/application-credentials).

## Authorization Code Flow

Because regular web apps are server-side apps where the source code is not publicly exposed, they can use the Authorization Code Flow, which exchanges an Authorization Code for a token.

- [Authorization Code Flow](/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)
- [Add Login Using the Authorization Code Flow](/docs/get-started/authentication-and-authorization-flow/add-login-auth-code-flow)
- [Call API Using the Authorization Code Flow](/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow)

## Authorization Code Flow with Proof Key for Code Exchange (PKCE)

During authentication, mobile and native applications can use the Authorization Code Flow, but they require additional security. Additionally, single-page apps have special challenges. To mitigate these, OAuth 2.0 provides a version of the Authorization Code Flow which makes use of a Proof Key for Code Exchange (PKCE).

- [Authorization Code Flow with Proof Key for Code Exchange (PKCE)](/docs/get-started/authentication-and-authorization-flow/authorization-code-flow-with-proof-key-for-code-exchange-pkce)
- [Add Login Using the Authorization Code Flow with PKCE](/docs/get-started/authentication-and-authorization-flow/add-login-using-the-authorization-code-flow-with-pkce)
- [Call API Using the Authorization Code Flow with PKCE](/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-authorization-code-flow-with-pkce)

## Implicit Flow with Form Post

As an alternative to the Authorization Code Flow, OAuth 2.0 provides the Implicit Flow, which is intended for Public Clients, or applications which are unable to securely store Client Secrets. While this is no longer considered a best practice for requesting Access Tokens, when used with Form Post response mode, it does offer a streamlined workflow if the application needs only an ID token to perform user authentication.

- [Implicit Flow with Form Post](/docs/get-started/authentication-and-authorization-flow/implicit-flow-with-form-post)
- [Add Login Using the Implicit Flow with Form Post](/docs/get-started/authentication-and-authorization-flow/add-login-using-the-implicit-flow-with-form-post)
- [Authenticate SPAs with Cookies](/docs/manage-users/cookies/spa-authenticate-with-cookies)

## Hybrid Flow

Applications that are able to securely store Client Secrets may benefit from the use of the Hybrid Flow, which combines features of the Authorization Code Flow and Implicit Flow with Form Post to allow your application to have immediate access to an ID token while still providing for secure and safe retrieval of access and refresh tokens. This can be useful in situations where your application needs to immediately access information about the user, but must perform some processing before gaining access to protected resources for an extended period of time.

- [Hybrid Flow](/docs/get-started/authentication-and-authorization-flow/hybrid-flow)
- [Call API Using the Hybrid Flow](/docs/get-started/authentication-and-authorization-flow/call-api-hybrid-flow)

## Client Credentials Flow

With machine-to-machine (M2M) applications, such as CLIs, daemons, or services running on your back-end, the system authenticates and authorizes the app rather than a user. For this scenario, typical authentication schemes like username + password or social logins don't make sense. Instead, M2M apps use the Client Credentials Flow (defined in OAuth 2.0 RFC 6749, section 4.4).

- [Client Credentials Flow](/docs/get-started/authentication-and-authorization-flow/client-credentials-flow)
- [Call API Using the Client Credentials Flow](/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-client-credentials-flow)

## Device Authorization Flow

With input-constrained devices that connect to the internet, rather than authenticate the user directly, the device asks the user to go to a link on their computer or smartphone and authorize the device. This avoids a poor user experience for devices that do not have an easy way to enter text. To do this, device apps use the Device Authorization Flow (drafted in OAuth 2.0). For use with mobile/native applications.

- [Device Authorization Flow](/docs/get-started/authentication-and-authorization-flow/device-authorization-flow)
- [Call API Using the Device Authorization Flow](/docs/get-started/authentication-and-authorization-flow/call-your-api-using-the-device-authorization-flow)

## Resource Owner Password Flow

Though we do not recommend it, highly-trusted applications can use the Resource Owner Password Flow, which requests that users provide credentials (username and password), typically using an interactive form. The Resource Owner Password Flow should only be used when redirect-based flows (like the [Authorization Code Flow](/docs/get-started/authentication-and-authorization-flow/authorization-code-flow)) cannot be used.

- [Resource Owner Password Flow](/docs/get-started/authentication-and-authorization-flow/resource-owner-password-flow)
- [Call API Using the Resource Owner Password Flow](/docs/get-started/authentication-and-authorization-flow/call-your-api-using-resource-owner-password-flow)
