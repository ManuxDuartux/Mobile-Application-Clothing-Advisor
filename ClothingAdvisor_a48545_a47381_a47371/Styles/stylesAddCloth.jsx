import { StyleSheet } from "react-native";

export default stylesAddCloth = StyleSheet.create({
  ClothesDetailsMainDiv: {
    
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
    marginTop: 50,
    top:120,
  },
  inputContainer: {
    width: "100%",
    marginBottom: 20,
  },
  input: {
    width: "100%",
    height: 43,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "rgba(196, 196, 196, 1)",
    backgroundColor: "rgba(255, 255, 255, 1)",
    paddingLeft: 18,
    fontSize: 14,
    color: "rgba(196, 196, 196, 1)",
  },
  selectContainer: {
    width: "100%",
    marginBottom: 20,
  },
  selectContainer_1: {
    left:70,
    top:150,
    width: "50%",
    height:200,
    marginBottom: 120,
  },
  selectContainer_2: {
    left:70,
    top:100,
    width: "60%",
    height:200,
  },

  buttonUploadPicture: {
    position:"relative",
    backgroundColor: "white",
    borderRadius: 20,
   // padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#ddd',
    borderWidth: 1,
    marginBottom: 20,
    right:100,
    top:45,
    width:120,
    height:60,
    right:110,
  },
  buttonSave: {
    backgroundColor: '#CC9966',
    borderRadius: 20,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'black',
    borderWidth: 2,
    marginBottom: 20,
    width:200,
    top:-28,
    left:80,
  },
  style_Save: {
    color: "black",
    letterSpacing: 0.1,
  },
});
