// https://leetcode.com/problems/longest-common-prefix/description/

#include <string>
#include <vector>

using std::vector;
using std::string;

class Solution {
  public: string longestCommonPrefix(vector<string>& strs) {

    char shortest = strs[0].length(); // Initialize with the length of the first string

    for (char i = 0; i < strs.size() - 1; i++) {
      for (char k = 0; k < shortest; k++) {
        if (strs[i][k] != strs[i + 1][k]) {
          shortest = k;
          break;
        }
      }
    }
    return strs[0].substr(0, shortest);
  }
};
