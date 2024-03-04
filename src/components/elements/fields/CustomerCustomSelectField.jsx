// import React from 'react';
// import { Form, Col, OverlayTrigger, Popover } from 'react-bootstrap';
// import { Link } from 'react-router-dom';

// export default function CustomerCustomSelectField({ field, options, defaultOption, index, register, errors, changeHandler, blurHandler }) {

//     // console.log(options)

//     return (
//         <Form.Group key={index} as={Col} md="4" className="mb-2">
//             <OverlayTrigger trigger="click" rootClose placement="auto" overlay={<Popover id="popover-basic">
//                 <Popover.Header as="h3">Field Description</Popover.Header>
//                 <Popover.Body>
//                     {field?.description ? field?.description : "No description found!"}
//                 </Popover.Body>
//             </Popover>}>
//                 <Form.Label className="m-0">{field?.label}</Form.Label>
//             </OverlayTrigger>

//             <Form.Select
//                 size='sm' style={{ maxWidth: '400px' }}
//                 disabled={field?.disabled}
//                 type="text"
//                 id={field?.fieldId}
//                 name={field?.fieldId}
//                 placeholder={field?.placeholder}
//                 isInvalid={errors[field?.fieldId]}
//                 {...register(field?.fieldId,
//                     {
//                         required: field?.required ? field?.validationMessage : false,
//                         onBlur: (event) => blurHandler && blurHandler(event, { type: field?.type, id: field?.fieldId }),
//                         onChange: (event) => changeHandler && changeHandler(event, { type: field?.type, id: field?.fieldId, targetValue: event.target?.value })
//                     })}
//             >
//                 {defaultOption && <option key={defaultOption?.value} value={defaultOption?.value}>{defaultOption?.value}</option>}
//                 {options && options?.map(option => {
//                     // console.log(option);
//                     if (option?.name?.startsWith("-")) {
//                         return <option key={option?._id} value={option?._id + "||" + option?.name} style={{ fontWeight: 500 }}>{option?.name}</option>
//                     } else if (option?.city != undefined) {
//                         return <option key={option?._id} value={option?._id + "||" + option?.name} >{`${option?.companyName} - ${option?.customerId} - ${option?.city} - (${(option.isExport && option.exportUSA?.length) ? option?.exportUSA.map(ele => ele.text) : (option.isExport && option.exportCAD?.length) ? option?.exportCAD.map(ele => ele.text) : option?.state}) - ${option?.name}`}</option>
//                     }
//                 })}

//             </Form.Select>

//             <Form.Control.Feedback type="invalid">
//                 {errors[field?.fieldId] && errors[field.fieldId]['message']}
//             </Form.Control.Feedback>

//         </Form.Group>
//     )
// }

import React from "react";

const CustomerCustomSelectField = () => {
  return <div>CustomerCustomSelectField</div>;
};

export default CustomerCustomSelectField;
