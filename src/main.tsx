import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import { DAppProvider } from '@usedapp/core';
import { DAppConfig } from './modules/dapp/dapp';
import App from './App';
import { moonSaveTheme } from './theme/theme';
import { HomePageContainer } from './pages/HomePage/HomePage.container';
import { TransactionsPageContainer } from './pages/TransactionsPage/TransactionsPage.container';
import { DepositPageContainer } from './pages/DepositPage/DepositPage.container';
import { WithdrawalPageContainer } from './pages/WithdrawalPage/WithdrawalPage.container';
import { WinnerPageContainer } from './pages/WinnerPage/WinnerPage.container';


ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <DAppProvider config={DAppConfig}>
        <MantineProvider withGlobalStyles withNormalizeCSS theme={moonSaveTheme}>
          <Routes>
            <Route path="/" element={<App />}>
              <Route path="/home" element={<HomePageContainer />} />
              <Route path="/transactions" element={<TransactionsPageContainer />} />
              <Route path="/deposit" element={<DepositPageContainer />} />
              <Route path="/withdrawal" element={<WithdrawalPageContainer />} />
              <Route path="/winner" element={<WinnerPageContainer />} />
              <Route
                path="*"
                element={
                  <main style={{ padding: '1rem' }}>
                    <p>There's nothing here!</p>
                  </main>
                }
              />
            </Route>
          </Routes>
        </MantineProvider>
      </DAppProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
