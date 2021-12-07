export const Toggele_Checkbox = "USER: :Toggele_Checkbox"
export const SIGN_IN = "USER: :SIGN_IN"
export const SIGN_OUT = "USER: :SIGN_OUT"

export const toggleCheckbox = {
    type: Toggele_Checkbox
}

export const signIn = () => ({
    type: SIGN_IN,
  
})
export const signOut = () => ({
    type: SIGN_OUT,
  
})