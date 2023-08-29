import './App.css';
import { AddTransaction } from './components/AddTransaction';
import { Balance } from './components/Balance';
import { Header } from './components/Header';
import { IncomeExp } from './components/IncomeExp';
import { TransactionsList } from './components/TransactionsList';
import{GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
      <Header/>
      <div className='container'>
        <Balance/>
        <IncomeExp/>
        <TransactionsList/>
        <AddTransaction/>
      </div>
    </GlobalProvider>
  );
}

export default App;
