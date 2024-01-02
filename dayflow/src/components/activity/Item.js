import { StyleSheet } from "react-native";
import { FlowHighlightView, FlowRow, FlowText } from "../overrides";
import { COLORS } from "../../variables/styles";

export const ActivityItem = ({ title }) => {
  return (
    <FlowHighlightView style={styles.itemContainer}>
      <FlowRow style={styles.row}>
        <FlowText>{title}</FlowText>
      </FlowRow>

      <FlowText style={styles.time}>{title}</FlowText>
    </FlowHighlightView>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    marginBottom: 6,
    paddingVertical: 19,
  },
  row: {
    justifyContent: "center",
  },
  time: {
    colors: COLORS.brightGreen,
  },
});
