import "./App.css";
import { lazy, Suspense } from "react";
import UseRef from "./UseRef";
import MovieProvider from "./MovieProvider";
import Blue from "./Blue";
import ReducerComponent from "./ReducerComponent";
import UseMemoComponent from "./MemoHook/UseMemoComponent";
import FriendListPropTypes from "./FriendListPropTypes";
import Family from "./Recursion/Family";
import { familyTree } from "./Recursion/familyTree";
import DebounceComponent from "./Debounce/DebounceComponent";
import CounterA from "./HOC/CounterA";
import CounterB from "./HOC/CounterB";
import Main from "./Callback/Main";
import Pagination from "./Pagination/Pagination";
import ThrottleComponent from "./Throttling/ThrottleComponent";
import StopWatch from "./StopWatch/StopWatch";

//lazy loading, suspense
const ComponentALazy = lazy(() => import("./ComponentALazy"));
const ComponentBLazy = lazy(() =>
  import("./ComponentBLazy").then((module) => {
    return { default: module.ComponentBLazy };
  })
);

function App() {
  return (
    <div className="App">
      {/* <MovieProvider>
        <UseRef />
        <Blue />
        <ReducerComponent />
      </MovieProvider> */}
      {/* <UseMemoComponent /> */}

      {/* <FriendListPropTypes name={333} />
      <Family familyTree={familyTree} /> */}
      {/* <DebounceComponent /> */}
      {/* <CounterA name={"A"} />
      <CounterB name={"B"} />
      <Suspense fallback={<h1>Loading....</h1>}>
        <ComponentALazy />
        <ComponentBLazy />
      </Suspense> */}
      {/* <Main /> */}
      {/* <Pagination /> */}
      {/* <ThrottleComponent /> */}
      <StopWatch />
    </div>
  );
}

export default App;
