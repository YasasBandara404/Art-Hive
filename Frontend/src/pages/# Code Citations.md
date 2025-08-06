# Code Citations

## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider:
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticate
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(
```


## License: unknown
https://github.com/davidcraccer/TimeNest/blob/2585682d53fb1c6e4fa75a93a4857f57f7dbcc7f/website/src/utils/authContext.tsx

```
export const AuthProvider: React.FC<{children: ReactNode}> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [user, setUser] = useState<User | null>(null);
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config)
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config)
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config) => {
    const token = localStorage.getItem('
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config) => {
    const token = localStorage.getItem('
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error
```


## License: GPL-2.0
https://github.com/smltrs0/store-shop/blob/b6bd5085487419d95745aa30e65999707f96e9ad/frontend/src/axios.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
```


## License: unknown
https://github.com/gfitzp2002/CSC7508_ListeningTestPlatformFrontend/blob/511fa7fbb1b13ad5b8bdc37c14051bfbe65567f7/src/service/AxiosConfig.js

```
.use(
  (config) => {
    const token = localStorage.getItem('userToken');
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T,
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T,
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T,
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue,
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue,
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue,
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue,
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      set
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/workspaces/liferay-ticket-workspace/client-extensions/liferay-ticket-custom-element/src/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`
```


## License: unknown
https://github.com/liferay/liferay-portal/blob/3c4993e6808b10f5b3ab48cb2bcc3b0576a3376d/modules/dxp/apps/osb/osb-site-initializer/osb-site-initializer-customer-portal/src/main/resources/site-initializer/fragments/group/src/customer-portal/fragments/project-breadcrumbs/index.js

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`
```


## License: unknown
https://github.com/Opetushallitus/organisaatio/blob/9b6a7ec5a71afdf0bd678a0545ed1b98347d8920/organisaatio-ui/src/tools/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`
```


## License: AGPL-3.0
https://github.com/cBioPortal/cbioportal-frontend/blob/3492a3136415c75880e6ecf6a450a2da7f2b1066/src/shared/components/query/filteredSearch/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`
```


## License: unknown
https://github.com/metxnbr/doc/blob/09e7de7e27063932a0c07dcadcf4f20f757a1ac1/docs/debounce/README.md

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`
```


## License: unknown
https://github.com/ninjastic/axiewatch/blob/e9e22e9504e1f306400c3588a23c8b474b690216/packages/web/src/services/hooks/useDebounce.tsx

```
{ useState, useEffect } from 'react';

export function useDebounce<T>(value: T, delay: number): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
`
```


## License: unknown
https://github.com/irahul47/demo1/blob/fb6502dbc3aab365690db7cfed621ac647eba68c/src/App.js

```
path
```


## License: unknown
https://github.com/raimukul/sarvvilay.in/blob/b76fd71d95255a142100707830b4e85fe73b5310/src/App.js

```
path
```


## License: unknown
https://github.com/irahul47/demo1/blob/fb6502dbc3aab365690db7cfed621ac647eba68c/src/App.js

```
path="/" element={<Index />} />
            
```


## License: unknown
https://github.com/raimukul/sarvvilay.in/blob/b76fd71d95255a142100707830b4e85fe73b5310/src/App.js

```
path="/" element={<Index />} />
            
```


## License: unknown
https://github.com/irahul47/demo1/blob/fb6502dbc3aab365690db7cfed621ac647eba68c/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={
```


## License: unknown
https://github.com/raimukul/sarvvilay.in/blob/b76fd71d95255a142100707830b4e85fe73b5310/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={
```


## License: unknown
https://github.com/irahul47/demo1/blob/fb6502dbc3aab365690db7cfed621ac647eba68c/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route
```


## License: unknown
https://github.com/raimukul/sarvvilay.in/blob/b76fd71d95255a142100707830b4e85fe73b5310/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route
```


## License: unknown
https://github.com/irahul47/demo1/blob/fb6502dbc3aab365690db7cfed621ac647eba68c/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
```


## License: unknown
https://github.com/raimukul/sarvvilay.in/blob/b76fd71d95255a142100707830b4e85fe73b5310/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
```


## License: unknown
https://github.com/irahul47/demo1/blob/fb6502dbc3aab365690db7cfed621ac647eba68c/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/
```


## License: unknown
https://github.com/raimukul/sarvvilay.in/blob/b76fd71d95255a142100707830b4e85fe73b5310/src/App.js

```
path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w-full border-b bg-backgroun
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex
```


## License: unknown
https://github.com/NTPU-Tools/ntpu-past-exam/blob/d7ac34c7ef59338b410610b8e23cd38e14fe4f93/components/site-header.tsx

```
(
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixe
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixe
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed in
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed in
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 gri
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 gri
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] gri
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] gri
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-m
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-m
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 m
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 m
```


## License: MIT
https://github.com/juliencrn/usehooks-ts/blob/20667273744a22dd2cd2c48c38cd3c10f254ae47/apps/www/src/components/mobile-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden
```


## License: unknown
https://github.com/matthewvolk/me/blob/c86d390a62de580574990ea50b2922108daaa6ae/src/components/main-nav.tsx

```
div className="fixed inset-0 top-16 z-50 grid h-[calc(100vh-4rem)] grid-flow-row auto-rows-max overflow-auto p-6 pb-32 shadow-md animate-in slide-in-from-bottom-80 md:hidden
```

