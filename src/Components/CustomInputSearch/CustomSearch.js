import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

const CustomSearchInput = ({ predefinedSuggestions }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [selectedSuggestion, setSelectedSuggestion] = useState('');

  const handleSearch = (value) => {
    if (value.trim() !== '') {
      const filteredResults = predefinedSuggestions.filter(suggestion =>
        suggestion.name.toLowerCase().includes(value.toLowerCase())
      );
      setSearchResults(filteredResults);
    } else {
      setSearchResults([]);
    }
  };

  return (
    <div>
   
      <Formik
        initialValues={{ searchTerm: '' }}
        onSubmit={({ resetForm }) => {
          resetForm();
          setSelectedSuggestion('');
          setSearchResults([]);
        }}
      >
        {({ handleChange, setFieldValue }) => (
          <Form>
            <Field
              type="text"
              name="searchTerm"
            //   placeholder="Enter Id"
              value={selectedSuggestion} // Only use selectedSuggestion here
              onChange={(e) => {
                const { value } = e.target;
                handleChange(e);
                handleSearch(value);
                setSelectedSuggestion(value); // Set selectedSuggestion to the input value
              }}
              style={{ color: 'black', width: '200px', height: '35px', borderRadius: '10px',border:"1px solid grey" }}
            />
            {searchResults.length > 0 && (
              <div style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
                {searchResults.map((result) => (
                  <div key={result.id} onClick={() => {
                    setSelectedSuggestion(result.name);
                    console.log("Selected suggestion id:", result.id); // Log the ID to the console
                    setSearchResults([]);
                    setFieldValue('searchTerm', result.name);
                    setSelectedSuggestion(''); // Clear the field after getting the ID
                  }} >
                    <Field type="hidden" name={`suggestion_${result.id}`} id={`suggestion_${result.id}`} value={result.name} />
                    {result.name}
                  </div>
                ))}
              </div>
            )}
           
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CustomSearchInput;
