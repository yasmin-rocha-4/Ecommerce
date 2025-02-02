import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native-web';
import BottomSheet from '@gorhom/bottom-sheet';

export type FilterBottomSheetRef = {
  expand: () => void;
};

const FilterBottomSheet = forwardRef<FilterBottomSheetRef>((_, ref) => {
  const bottomSheetRef = useRef<BottomSheet>(null);

  useImperativeHandle(ref, () => ({
    expand: () => {
      bottomSheetRef.current?.expand();
    },
  }));

  const handleApplyFilter = () => {
    // Lógica para aplicar filtro
    bottomSheetRef.current?.close();
  };

  return (
    <BottomSheet
      ref={bottomSheetRef}
      index={-1}
      snapPoints={['25%', '50%']}
      enablePanDownToClose
    >
      <View style={styles.contentContainer}>
        <Text style={styles.title}>Filter</Text>
        <Text style={styles.subtitle}>Category</Text>
        <TouchableOpacity style={styles.filterOption}>
          <Text>Headphone</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text>Headset</Text>
        </TouchableOpacity>
        <Text style={styles.subtitle}>Sort By</Text>
        <TouchableOpacity style={styles.filterOption}>
          <Text>Popularity</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text>Newest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text>Oldest</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text>High Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterOption}>
          <Text>Low Price</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton} onPress={handleApplyFilter}>
          <Text style={styles.applyButtonText}>Apply Filter</Text>
        </TouchableOpacity>
      </View>
    </BottomSheet>
  );
});

const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 8,
  },
  filterOption: {
    padding: 8,
    marginVertical: 4,
    backgroundColor: '#f0f0f0',
    borderRadius: 4,
  },
  applyButton: {
    marginTop: 16,
    padding: 16,
    backgroundColor: '#007bff',
    borderRadius: 4,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default FilterBottomSheet;