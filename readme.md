## Geratexto

Geratexto is a web app to fill an template text with a form.

### How it works

1. Set template texts on *.txt files;
2. Configure the form parameters (fields and their labels, attributes and/or values) at config.json file;
3. Voalà! You can use Geratexto to fill the form and generate the text from the setted template.

### Details

#### Template 
First of all, you have to save the *.txt text template file in "template" folder. Pay attention: in the template, you have to set the values you want to replace with a keyword embraced by double braces just like {{keyword}}. For exemple, you can user {{name}} and {{phone}} to set the places where this values will be filled when using Geratexto.

You can use as much templates as you need — but you need to create a form for each of them.

#### config.json

The config.json file has the following structure:

{
    "TEXT TITLE OR SUBJECT": {
        "fields": [
            "field_1",
            "field_2",
            ["field_n"]
        ],
        "labels": [
            "Label to the field_1",
            "Label to the field_2",
            "Label to the field_n",
        ],
        "attributes": [
            {"name_of_first_html_attribute_to_field1": "attribute_value", "name_of_second_html_attribute_to_field1": "attribute_value", "name_of_nst_html_attribute_to_field1": "attribute_value"},
            {"name_of_first_html_attribute_to_field2": "attribute_value", "name_of_nst_html_attribute_to_field2": "attribute_value",
            ["First value of field_n", "Second value of field_n", "Third value of field_n", "Nst value of field_n"]
        ]
    }
}

So, as you can see:

- You can create as much fields as you want;
- The "labels" and "attributes" matches to the "fields" order;
- Fields setted inside brackets [] area "select" fields and the "attributes" are an array of it's options;
- You can set as much attributes as you want, and they are objects with "atribute_name":"atribute_value" format;
- It's not possible to set attributes to "select" fields (you can set just the values of the options).

Please, for more details, free to check the code and to see how it works [by clicking here](https://cegj.github.io/geratexto/). 