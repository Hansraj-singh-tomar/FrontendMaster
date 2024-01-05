// In context api we use children - {{children}} this is also an example of render props
// disadvantage - user kuch bhi pass kar sakta hai 

// RenderPropsComponent is a generic component that receives a function as a prop
// eslint-disable-next-line react/prop-types
const RenderPropsComponent = ({ render }) => {
  // The component calls the render function and passes some data to it
  return (
    <div>
      <h1>Render Props Component</h1>
      {render && typeof render === 'function' && render({ message: 'Hello from RenderPropsComponent!' })}
    </div>
  );
};

// App component renders RenderPropsComponent and provides a render function as a prop
const RenderProps = () => {
  return (
    <div>
      <h1>App Component</h1>
      {/* RenderPropsComponent is used with the render prop */}
      <RenderPropsComponent
        render={({ message }) => (
          <div>
            <p>{message}</p>
            <p>This content is rendered using the Render Props pattern.</p>
          </div>
        )}
      />
    </div>
  );
};

export default RenderProps;