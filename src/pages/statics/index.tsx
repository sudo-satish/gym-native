import {Box, Center, ScrollView, Text, View, VStack, HStack} from 'native-base';
import React from 'react';
import {LineChart} from 'react-native-chart-kit';

const DashboardCard = ({title, subTitle}: any) => {
  return (
    <Box
      // h="1/2"
      // w="2/3"
      borderColor="purple.400"
      // borderWidth="1"
      borderRadius="2"
      m="3"
      // p="3"
      backgroundColor="purple.100"
      shadow="1">
      <HStack ml={3} alignItems="center">
        <Text fontWeight="bold" fontSize="4xl" width="50">
          {title}
        </Text>
        <VStack ml="3">
          <Text color="purple.600">{subTitle}</Text>
          <Text fontSize="xs">Total active members</Text>
        </VStack>
      </HStack>
      <Box w="300" h="100" mt={3} bg="purple.200">
        <LineChart
          data={{
            // labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
              {
                data: [
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                  Math.random() * 100,
                ],
              },
            ],
          }}
          width={300} // from react-native
          height={100}
          yAxisLabel=""
          yAxisSuffix="k"
          yAxisInterval={1} // optional, defaults to 1
          chartConfig={{
            backgroundColor: '#d8b4fe',
            backgroundGradientFrom: '#d8b4fe',
            backgroundGradientTo: '#c084fc',
            decimalPlaces: 2, // optional, defaults to 2dp
            color: (opacity = 0.5) => `rgba(255, 255, 255, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            propsForDots: {
              r: '6',
              strokeWidth: '0.5',
              stroke: '#ffa726',
            },
          }}
          bezier
        />
      </Box>
    </Box>
  );
};
const StatisticsPage = () => {
  return (
    <View>
      <ScrollView>
        <Center>
          <VStack>
            <DashboardCard title="2K" subTitle="Total Members" />
            <DashboardCard title="15" subTitle="New Members" />
            <DashboardCard title="5" subTitle="Membership expired" />
            <DashboardCard
              title="5"
              subTitle="Membership expiring this month"
            />
            <DashboardCard title="1K" subTitle="Membership Revenue Collected" />
            <DashboardCard title="2L" subTitle="Revenue" />
          </VStack>
        </Center>
      </ScrollView>
    </View>
  );
};

export default StatisticsPage;
