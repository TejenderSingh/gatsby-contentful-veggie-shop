export default function validate(values) {
  let errors = {}
  if (!values.name) {
    errors.name = "Name is required"
  } else if (values.name.length < 3) {
    errors.name = "Name must be 3 or more characters"
  }
  if (!values.email) {
    errors.email = "Email address is required"
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = "Email address is invalid"
  }
  if (!values.description) {
    errors.description = "Description is required"
  } else if (values.description.length < 10) {
    errors.description = "Description must be 10 or more characters"
  }
  return errors
}
