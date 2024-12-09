function add(a, b) {
  return a + b;
}

add(1, 2) // 3
add('1', '2') // '12'

add('1', 2) // error
add({}, []) // error

===================================

type Viewing = {
  typeOfDay: 'morning' | 'afternoon' | 'evening' | 'night',
  createdAt: %unix timestamp%
}

type Response = Viewing[];

morning = 100
afternoon = 1000
evening = 500
night = 10

afternoon = 1000
evening = 500
morning = 100
night = 10

function SortViewing(viewings: Viewing[]): Viewing[] {
  const viewingsByTypeOfDay = viewings.reduce((acc, view) => {
    if (!acc[view.typeOfDay]) {
      acc = {...acc, [view.typeOfDay]: []}
    } else {
      acc[view.typeOfDay].push(view)
    }
    return acc
  }, {})

  // [[key, [10], [key, [20]], [key, [15]], [key, [40]]]
  // [[key, [40], [key, [20]], [key, [15]], [key, [10]]]

  const viewingsSorted = Object.entries(viewingsByTypeOfDay).map(([key, value]) => {
    const sortedValue = value.sort((a, b) => a - b)
    return [key, sortedValue]
  }).sort(([key1, value1], [key2, value2]) => {
    return value1.length - value2.length
  })


  return viewingsSorted.reduce((acc, view) => {
    return [...acc, ...view[1]]
  }, [])
}

==============================

const useComponentWillMount = (fn) => {
  const ref = useRef()

  if (ref.current === null) {
    fn()
    ref.current = 'executed'
  }
};

const Component = () => {
  const [state, setState] = useState(0);

  useComponentWillMount(() => { console.log('123123'); });

  return (
    <div>
      <button onClick={() => { setState(state + 1); }}>
        click
      </button>
      { state }
    </div>
  );
};


'use server'
const A = () => ...

'use server'
const B = () => ...


'use client';
const C = ({ children }) => {
  const [] = useState();


  return (
    <>
      <Button ... >
      { children }
      <>
        )
        };


        const Root = () => {
        return <C>
        <A />
        <B />

        </C>;
      };

