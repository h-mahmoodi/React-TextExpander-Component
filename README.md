# React-TextExpander-Component
 Text Expander Component |  A simply reusable , flexible and clone react component


 # How To Use Component
 
Available props :

defaultExpand : (bool) (default=true) Set default expander behavior

wordCount : (number) (default=20) Set minimum word to collapse

expanderText : (string) (default="Show More") Set expander button text

CollapserText : (string) (default="Show  Less") Set collapser button text

buttonColor : (string) (default="red") Set expander button text color

className : (string) (default="") Set custom class attr for add more user's style


Example of usage :

First Add component file (TextExpander.jsx) to src/component
Then use it every where(import it before use)

Code Example :

 
  
      <div>
        <TextSpander
          defaultExpand={true}
          wordCount={40}
          buttonColor="red"
          expanderText="Show Moreee"
          CollapserText="Show Lessss"
          className="costomClass"
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </TextSpander>
      </div>


