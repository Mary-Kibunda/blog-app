const SubscriptionTable = ({ email, date, mongoId, deleteEmail }) => {
  const emailDate = new Date(date);
  return (
    <tr className="bg-white py-4 border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : "No email"}
      </th>
      <td className="px-6 py-4 hidden sm:block">
        {emailDate ? emailDate.toLocaleDateString() : "N/A"}
      </td>
      <td
        onClick={() => deleteEmail(mongoId)}
        className="px-6 py-4 cursor-pointer"
      >
        X
      </td>
    </tr>
  );
};

export default SubscriptionTable;
