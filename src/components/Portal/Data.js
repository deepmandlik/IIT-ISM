export const sections = [
  {
    label: "Personal Information",
    elements: [
      {
        element: "Data",
        label: "Salutation",
        child: [
          {
            type: "dropdown",
            values: ["Mr", "Mrs", "Miss", "Dr"],
          },
        ],
      },
      {
        element: "Data",
        label: "Name",
        child: [
          {
            type: "text",
            label: "first",
            size: 250,
          },
          {
            type: "text",
            label: "middle",
            size: 250,
          },
          {
            type: "text",
            label: "last",
            size: 250,
          },
        ],
      },
      {
        element: "Data",
        label: "Mother's Name",
        child: [
          {
            type: "text",
            label: "Mother's Name",
            size: 250,
          },
        ],
      },
      {
        element: "Data",
        label: "Father's Name",
        child: [
          {
            type: "text",
            label: "Father's Name",
            size: 250,
          },
        ],
      },

      {
        element: "Data",
        label: "Date of Birth",
        child: [
          {
            type: "date",
            size: 250,
          },
        ],
      },
      {
        element: "Data",
        label: "Gender",
        child: [
          {
            type: "dropdown",
            values: ["Male", "Female", "Others"],
            size: 250,
          },
        ],
      },
      {
        element: "Data",
        label: "Marital Status",
        child: [
          {
            type: "dropdown",
            values: ["Single", "Married"],
            size: 250,
          },
        ],
      },
      {
        element: "Data",
        label: "Category",
        child: [
          {
            type: "dropdown",
            values: ["General", "SC", "ST", "OBC"],
            size: 250,
          },
        ],
      },
      {
        element: "Data",
        label: "Permanent Address",
        child: [
          {
            type: "text",
            label: "Flat, House, Building",
            size: 250,
          },
          {
            type: "text",
            label: "Area, Sector, Village",
            size: 250,
          },
          {
            type: "number",
            label: "pincode",
            size: 150,
          },
          {
            type: "text",
            label: "city",
            size: 250,
          },
          {
            type: "dropdown",
            label: "state",
            values: ["West Bengal", "UP"],
            size: 200,
          },
        ],
      },
    ],
  },
  {
    label: "Employment Details",
    elements: [
      {
        element: "Group",
        label: "Present Employment",
        elements: [ 
          {
            element: "Data",
            label: "Designation",
            child: [ 
              {
                type: "text",
                label: "",
                size: 250
              }
            ]
          },
          {
            element: "Data",
            label: "Organisation",
            child: [ 
              {
                type: "text",
                label: "",
                size: 250
              }
            ]
          },
          {
            element: "Data",
            label: "Date of Joining",
            child: [ 
              {
                type: "date",
                label: "",
                size: 250
              }
            ]
          },
          {
            element: "Data",
            label: "Scale of Pay",
            child: [ 
              {
                type: "number",
                label: "",
                size: 250
              }
            ]
          },
          {
            element: "Data",
            label: "Basic Pay",
            child: [ 
              {
                type: "text",
                label: "",
                size: 250
              }
            ]
          },
          {
            element: "Data",
            label: "Total Emoluments",
            child: [ 
              {
                type: "text",
                label: "",
                size: 250
              }
            ]
          }
        ]
      }


      
    ]
  }
];
